import './Post.css';
import Tag from '../Tag/Tag';
import UserInfo from '../UserInfo/UserInfo';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

export default function Post({ title, body, userName, date, slug, tags }) {
  return (
    <div className="post">
      <div className="post-container">
        <div className="user-info-container">
          <UserInfo userName={userName} date={date} />
          <Button
            icon={true}
            text="62"
            style={{
              width: '77px',
              height: '40px',
              fontSize: '12.8px',
              backgroundColor: '#ffffff',
              color: '#61BB61',
            }}
          />
        </div>
        <Link className="post-title" to={`/articles/${slug}`}>
          {title}
        </Link>
        <p className="post-text">{body}</p>
        {!tags.includes(null) &&
          tags.map((tag, i) => {
            return <Tag key={i} name={tag} />;
          })}
      </div>
    </div>
  );
}
