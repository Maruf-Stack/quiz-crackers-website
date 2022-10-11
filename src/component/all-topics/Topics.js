import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const allTopics = useLoaderData();
    const topicsObj = allTopics.data;
    return (
        <div className='grid gap-12 mt-10 ml-8 mr-8 md:ml-20 md:mr-20 lg:grid-cols-3 md:grid-cols-2'>
            {
                topicsObj.map(topics => <Topic key={topics.id} topics={topics}></Topic>)
            }
        </div>
    );
};

export default Topics;