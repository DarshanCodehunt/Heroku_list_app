import React, { useState, useEffect } from 'react';


const Displayrow = ({ storyData, updateStory, fetchStoriesOntype }) => {
    const [type, setType] = useState('F');

    useEffect(() => {
        fetchStoriesOntype(type);
    }, [type])
    const fetchTime = (date) => {
        const d1 = new Date(new Date().toGMTString())
        const d2 = new Date(new Date(date).toGMTString())
        const diffTime = Math.abs(d1 - d2);
        const diffhours = Math.ceil(diffTime / (1000 * 60 * 60));
        return `${diffhours} hours ago [`;

    }

    const handleClick = (event, id) => {
        storyData.map((obj) => {
            if (obj.objectID === id) {
                obj.ishidden = true;
            }
        });

        updateStory(storyData);

    }

    const handleUpvote = (e, id) => {
        storyData.map((obj) => {
            if (obj.objectID === id) {
                obj.points = obj.points + 1;
                obj.upVoteChanged = true;
            }
        });
        updateStory(storyData);
    }

    const handlePagination = () => {
        type === 'F' ? setType('L') : setType('F');
    }
    const fetchRows = () => {
        let arr = storyData && storyData.map((obj, index) => {
            if (obj.ishidden) {
                return null;
            } else {
                let classNameDynamic = '';
                obj.upVoteChanged ? classNameDynamic = 'color-change' : classNameDynamic = '';
                return <div key={index} className='story-block'>
                    <p className='flex-item1'> {obj.num_comments}</p>
                    <p className='flex-item2'><span className={`upvote-label ${classNameDynamic}`}><i onClick={(e) => handleUpvote(e, obj.objectID)} class="fa fa-sort-asc" aria-hidden="true"></i>{obj.points}</span></p>
                    <p className='flex-item3'>{obj.title} <span>({obj.url} ) by</span> {obj.author} <span>{fetchTime(obj.created_at)}</span> <a onClick={(e) => handleClick(e, obj.objectID)}>Hide</a> <span>]</span></p>
                </div>
            }


        });
        if (arr) {
            arr.push(<div className='story-block'>
                <p className='flex-item1'> {''}</p>
                <p className='flex-item2'>{''}</p>
                <p onClick={handlePagination} className='flex-item3' style={{ color: 'orangered', cursor: 'pointer' }}>{type === 'F' ? 'More' : 'Back'}</p>
            </div>)
        }



        return arr;
    }

    return <div className='main-block'>
        {fetchRows()}

    </div>
}

export default Displayrow;