import React, {useEffect} from "react";
import { searchCourse } from "../../redux/actions";
import {connect} from "react-redux";
//components
import SearchBox from "./SearchBox";
import CourseCard from "./CourseCard";
//style
import "../assets/scss/components/Course.scss"

function CourseList(props) {
  let { listCourses, searchCourse } = props
  let [ result, setResult ] = React.useState([])
  useEffect(() => {
    searchCourse({"start":0,"length":12,"sortBy":{"column":"price","dir":"desc"}})
  }, [])

  const onChangeResult = (result) =>{
    console.log(result)
    setResult(result)
  }

  return (
    <>
      <div>
        <h1>ONLINE COURSES</h1>
      </div>
      {listCourses.data && (
        <SearchBox
          placeholder="Search Course Name"
          data={listCourses.data}
          sortedBy="price"
          onChangeResult={onChangeResult}
        />
      )}
      <div className="boxCourses">
        {result ? (result.map((course) => (<CourseCard course={course}/>))
          ) : (
            listCourses.data && listCourses.data.map((course) => (<CourseCard course={course}/>))
        )}
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  listCourses: state.course.listCourses
})

const mapDispatchToProps = {
  searchCourse
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseList)
