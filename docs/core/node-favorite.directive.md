---
Added: v2.0.0
Status: Active
Last reviewed: 2018-04-10
---

# Node Favorite directive

Selectively toggles nodes as favorites.

## Basic Usage

```html
<adf-toolbar>
    <button mat-icon-button
            (toggle)="done()"
            [adf-node-favorite]="documentList.selection">
    </button>
</adf-toolbar>

<adf-document-list #documentList ...>
 ...
</adf-document-list>
```

```ts
@Component({
    selector: 'my-component'
})
export class MyComponent {

    done() {
        // ...
    }

}
```

## Class members

### Properties

| Name | Type | Default value | Description |
| -- | -- | -- | -- |
| adf-node-favorite | `MinimalNodeEntity[]` |  \[] | Array of nodes to toggle as favorites. |

### Events

| Name | Type | Description |
| -- | -- | -- |
| toggle | `EventEmitter<any>` | Emitted when the favorite setting is complete. |
| error | `EventEmitter<any>` | Emitted when the favorite setting has fail. |

## Details

You can bind the directive instance to a template variable through the **adfFavorite** reference,
which also lets you add extra styling to the element:

<!-- {% raw %} -->

```html
<button
    mat-menu-item
    #selection="adfFavorite"
    [ngClass]="{ 'icon-highlight': selection.hasFavorites() }"
    [adf-node-favorite]="documentList.selection">
    <mat-icon [ngClass]="{ 'icon-highlight': selection.hasFavorites() }">
        {{ selection.hasFavorites() ? 'star' : 'star_border' }}
    </mat-icon>
</button>
```

<!-- {% endraw %} -->

The directive behaves as follows:

-   If there are no favorite nodes in the selection, then all are marked as favorites
-   If there are one or more favorite node in the selection, then only those that are not
    favorites are marked
-   If all nodes in the selection are favorites, then they all have their favorite status removed

See the **Demo Shell** for examples of usage.