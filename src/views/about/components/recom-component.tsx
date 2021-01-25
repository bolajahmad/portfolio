import React from 'react';


export const RecommendationsComponent: React.FC = () => {
  return (
    <div className="recom_container">
      <div className="recoms">
        <div className="p-text">
          <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
        </div>

        <div className="italic" style={{ color: 'gray' }}>
          after nirsal project
        </div>

        <div className="bold" style={{ textTransform: 'uppercase', color: 'gray' }}>
          adeayo J, lead director at needle tech.
        </div>

        <div className="link_wrapper">
          <span><a href="https://twitter.com">twitter</a></span>
          <span><a href="https://email.com">email</a></span>
          <span><a href="https://linedin.com">linkedin</a></span>
        </div>
      </div>
    </div>
  );
};