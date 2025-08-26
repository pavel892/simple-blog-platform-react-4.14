import { useLoaderData } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Banner from '../components/Banner/Banner';
import UserInfo from '../components/UserInfo/UserInfo';
import Tag from '../components/Tag/Tag';
import Button from '../components/Button/Button';
import './ArticlePage.css';

export default function ArticlePage() {
  const article = useLoaderData();

  return (
    <div>
      <Banner
        mainContent={article.article.title}
        mainTextStyle={{
          fontSize: '46px',
          marginBottom: '10px',
        }}
        style={{
          backgroundColor: '#333333',
          height: '282px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '118px',
        }}
        userInfo={<UserInfo userName={article.article.author.username} date={article.article.createdAt} />}
      />
      <div className="article-body">
        <ReactMarkdown>{article.article.body}</ReactMarkdown>
        <div
          style={{
            marginTop: '24px',
          }}
        >
          {article.article.tagList.map((tag, i) => {
            return <Tag key={i} name={tag} />;
          })}
        </div>

        <div className="user-info-btn">
          <div style={{ marginRight: '16px' }}>
            <UserInfo userName={article.article.author.username} date={article.article.createdAt} />
          </div>

          <Button
            icon={false}
            text="Favorite article"
            style={{
              width: '112px',
              height: '32px',
              fontSize: '12.8px',
              backgroundColor: '#61BB61',
              color: '#ffffff',
            }}
          />
        </div>
      </div>
    </div>
  );
}
