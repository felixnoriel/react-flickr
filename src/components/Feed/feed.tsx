import React from 'react';
import './feed.scss';

interface IFeedList {
  feed: any;
}
/**
 * Constructs feed information and iterate its items
 * @param feed
 */
export const FeedInfo: React.SFC<IFeedList> = ({ feed }) => {

  if( !feed || !feed.items ) {
    return (<p className="loading">Loading ...</p>)
  };

  return (
    <div className="feed-info">
      <p className="search-title"><span className="shadow">{feed.title}</span></p>
      <ul className="list">
        { feed.items.map( (feed: any, key: number) => <Feed key={key} feedItem={feed} />) }
      </ul>
    </div>
  )
}

interface IFeed {
  feedItem: any;
}
/**
 * Constructs a feed item including its details
 * @param feedItem
 */
export const Feed = ({ feedItem }: IFeed) => (
  <li className="list-item">
    <a className="link" target="_blank" rel="noopener noreferrer" href={feedItem.link}>
      <img className="media" alt="" src={feedItem.media.m} />
      <p className="text title">{ feedItem.title }</p>
      <div className="details">
        <p className="text author">{ feedItem.author }</p>
        <p className="text published">{ feedItem.published}</p>
      </div>
    </a>
  </li>
)