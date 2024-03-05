/*import React from 'react';

function InfoCard({ index, handleClick, article }) {
  return (
    <li id="list">
      <div className="title">
        {article.title} &nbsp;
      </div>
      <div className="author">
        {article.author}                    
      </div>
      <div className="author">
        {article.author}                    
      </div>
      <div className="author">
        {article.author}                    
      </div>
    </li>
  );
}

export default InfoCard;*/

import React from 'react';

function NewCard({ article }) {
  return (
    <li id="list">
      <div className='titleDiv'>
        <div className="title">
            {article.title} &nbsp;
        </div>
        <div className='url'>
            <a  href={article.url}>
              {article.url}
            </a>
        </div>
     </div>
     <div className='infoDiv'>
        <div className="author">
            By: {article.author} &nbsp;
        </div>
        <div>
            Pts: {article.points}
        </div>
        <div>
            comments: {article.num_comments}
        </div>
     </div>
      
      
    </li>
  );
}

export default NewCard;
