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

export * from './process.module';

export * from './process-list/process-list.module';
export * from './task-list/task-list.module';
export * from './app-list/apps-list.module';
export * from './attachment/attachment.module';

/** @deprecated in 2.3.0, part of the module moved in the core */
export { CommentsModule } from '@alfresco/adf-core';

export * from './process-comments/process-comments.module';

export * from './people/people.module';
export * from './content-widget/content-widget.module';

export * from './process-list';
export * from './task-list';
export * from './app-list';
export * from './attachment';

/** @deprecated in 2.3.0, component moved in the core */
export { CommentListComponent } from '@alfresco/adf-core';
/** @deprecated in 2.3.0, component moved in the core */
export { CommentsComponent } from '@alfresco/adf-core';

export * from './process-comments';
export * from './people';
export * from './content-widget';