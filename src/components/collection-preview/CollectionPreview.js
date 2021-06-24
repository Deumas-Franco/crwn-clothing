import CollectionItem from '../collection-item/CollectionItem';
import './CollectionPreview.scss';
const CollectionPreview = ({title,items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                .filter(item => item.id < 5)
                .map(({id,...otherItemProp}) => <CollectionItem key={id} {...otherItemProp} />)
            }
        </div>
    </div>
);


export default CollectionPreview;