/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { MinimalNodeEntryEntity } from 'alfresco-js-api';
import { Observable } from 'rxjs/Observable';
import { CardViewItem, NodesApiService, LogService, CardViewUpdateService, AlfrescoApiService } from '@alfresco/adf-core';
import { ContentMetadataService } from '../../services/content-metadata.service';
import { CardViewGroup } from '../../interfaces/content-metadata.interfaces';

@Component({
    selector: 'adf-content-metadata',
    templateUrl: './content-metadata.component.html',
    styleUrls: ['./content-metadata.component.scss'],
    host: { 'class': 'adf-content-metadata' },
    encapsulation: ViewEncapsulation.None
})
export class ContentMetadataComponent implements OnChanges, OnInit {
    /** (required) The node entity to fetch metadata about */
    @Input()
    node: MinimalNodeEntryEntity;

    /** Toggles whether the edit button should be shown */
    @Input()
    editable: boolean = false;

    /** Toggles whether to display empty values in the card view */
    @Input()
    displayEmpty: boolean = false;

    /** Toggles between expanded (ie, full information) and collapsed
     * (ie, reduced information) in the display
     */
    @Input()
    expanded: boolean = false;

    /** The multi parameter of the underlying material expansion panel */
    @Input()
    multi = false;

    /** Name of the metadata preset, which defines aspects and their properties */
    @Input()
    preset: string;

    componentInited: boolean = false;
    basicProperties$: Observable<CardViewItem[]>;
    groupedProperties$: Observable<CardViewGroup[]>;

    constructor(
        private contentMetadataService: ContentMetadataService,
        private cardViewUpdateService: CardViewUpdateService,
        private nodesApiService: NodesApiService,
        private logService: LogService,
        private alfrescoApiService: AlfrescoApiService
    ) {}

    ngOnInit() {
        this.cardViewUpdateService.itemUpdated$.switchMap(this.saveNode.bind(this)).subscribe(
            updatedNode => {
                Object.assign(this.node, updatedNode);
                this.alfrescoApiService.nodeUpdated.next(this.node);
            },
            error => this.logService.error(error)
        );

        this.componentInited = true;
    }

    ngOnChanges(changes: SimpleChanges) {
        const changedNode: MinimalNodeEntryEntity = changes['node'] && changes['node'].currentValue;

        if (!this.componentInited || (changedNode && changedNode !== this.node)) {
            const node = changedNode || this.node;
            this.basicProperties$ = this.contentMetadataService.getBasicProperties(node);
            this.groupedProperties$ = this.contentMetadataService.getGroupedProperties(node, this.preset);
        }
    }

    private saveNode({ changed: nodeBody }): Observable<MinimalNodeEntryEntity> {
        return this.nodesApiService.updateNode(this.node.id, nodeBody);
    }
}
