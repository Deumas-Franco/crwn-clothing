import './menuItem.scss';

const MenuItem = ({title,size,imageUrl}) => (
    <div className={`menu-item ${size}`}>
        <div className="bgImg" style={{
            backgroundImage: `url(${imageUrl})`
        }}></div>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;