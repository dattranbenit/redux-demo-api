import React from 'react'
import "../assets/scss/components/Card.scss"

function CourseCard(props) {
  let {course} = props
  return (
    <>
      <div className="card-game">
        <div style={{textDecoration: "none"}}>
          <div className="element-card-question">
            <div className="card-question-practice">
              <div className="text-uppercase text-dark mb-0">
                <div className="card-content">
                  <img src={course.imageUrl} alt="" width="90%"/>
                  <div className="description" >
                    {course.courseName}
                  </div>
                  <div className="description">
                    Price {course.price}
                  </div>
                </div>
              </div>
              <p className="description">
                {course.metaDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseCard