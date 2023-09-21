import React from 'react'
import thumb from '../../../../assets/images/event.png'

import './Events.css'

function MainEvents() {
  const events = [
    {
      topic: 'viramaya',
      thumbnail: thumb,
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quidem, repudiandae hic quia odio labore laboriosam delectus id, sapiente, nihil porro veritatis repellendus dolore? Suscipit eligendi natus hic impedit pariatur!',
    },
    {
      topic: 'viramaya',
      thumbnail: thumb,
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quidem, repudiandae hic quia odio labore laboriosam delectus id, sapiente, nihil porro veritatis repellendus dolore? Suscipit eligendi natus hic impedit pariatur!',
    },
    {
      topic: 'viramaya',
      thumbnail: thumb,
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quidem, repudiandae hic quia odio labore laboriosam delectus id, sapiente, nihil porro veritatis repellendus dolore? Suscipit eligendi natus hic impedit pariatur!',
    },
    {
      topic: 'viramaya',
      thumbnail: thumb,
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quidem, repudiandae hic quia odio labore laboriosam delectus id, sapiente, nihil porro veritatis repellendus dolore? Suscipit eligendi natus hic impedit pariatur!',
    },
  ]

  return (
    <>
      <h2 className="event-header">UPCOMMING EVENTS</h2>
      <div className="event-container">
        <div className="events">
          {events.map((event, index) => (
            <div className="event" key={index}>
              <img className="event-thumb" src={event.thumbnail} alt="Event thumbnail" />
              <div className="event-details">
                <div className="event-topic">{event.topic}</div>
                <div className="event-description">{event.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MainEvents
