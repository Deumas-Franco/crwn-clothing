import {withRouter} from 'react-router-dom';
import './menuItem.scss';

const MenuItem = ({title,size,imageUrl,history,match,linkUrl}) =>{
    return (
        <div className={`menu-item ${size}`} onClick={() => {
            history.push(`${match.url}${linkUrl}`)
        }}>
            <div className="bgImg" style={{
                backgroundImage: `url(${imageUrl})`
            }}></div>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);