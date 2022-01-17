import React from 'react';
import {useCategory} from '../../Hooks/useCustomer'
import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom';

export default function CategoryData() {
    const { Meta } = Card;
    const {loading , data , error} = useCategory();
    if (loading) return <div>Loading CategoryData ...</div>;
    if (error) return <div>something went wrong in CategoryData ...</div>;
    return (
        <div style={{margin : '5px'}}>
            <h2 style={{background : ''}}>Food Category List</h2>
            <div style={{display:'flex',flexWrap: "wrap",justifyContent: "space-evenly"}}>
            {
                data?.viewer?.categoryList.map((category) => {
                    return (
                        <Link to={`/${category.categoryID}`}>
                         <Card
                    style={{ width: 300}}
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                  >
                    <Meta
                      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                      title={category?.name}
                      description={category?.description}
                    />
                  </Card>
                        </Link>
                    )
                }
                   
                )
            }
            </div>
        </div>
    )
}
