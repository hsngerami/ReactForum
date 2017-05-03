/* jshint ignore:start */
import React from 'react';

export default function({ title, rank }) {
  let userTitle = title || rank.title || rank.name;

  let className = 'user-title';
  if (rank.css_class) {
    className += ' user-title-' + rank.css_class;
  }

  if (rank.is_tab) {
    return (
      <a className={className} href={rank.absolute_url}>
        {userTitle}
      </a>
    );
  }

  return (
    <span className={className}>
      {userTitle}
    </span>
  );
}