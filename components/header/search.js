import React, { Fragment } from 'react';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
const { Search } = Input;


const HeaderSearch = () => {
  return <Fragment>
              <Search
            placeholder="Search Product"
            onSearch={value => console.log(value)}
            className="search-input-bar"
            />
         </Fragment>
}

export default HeaderSearch;
