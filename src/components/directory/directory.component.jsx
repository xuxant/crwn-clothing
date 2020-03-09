import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      section: [
        {
          title: 'hats',
          imageUrl:
            'https://images.unsplash.com/photo-1576281930835-7633c4652623?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'jackets',
          imageUrl:
            'https://images.unsplash.com/photo-1525430182374-bf7e61d4f220?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&q=80',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'sneakers',
          imageUrl:
            'https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'womens',
          imageUrl:
            'https://images.unsplash.com/photo-1574719967567-b59da34a037c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=576&q=80',
          id: 4,
          size: 'large',
          linkUrl: ''
        },
        {
          title: 'mens',
          imageUrl:
            'https://images.unsplash.com/photo-1548883354-a3fb8460973f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          id: 5,
          size: 'large',
          linkUrl: ''
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.section.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
