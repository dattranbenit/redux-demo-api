import React, {useEffect} from 'react'

function SearchBox(props) {
  let {
    placeholder,
    data,
    sortedBy,
    onChangeResult,
  } = props
  let [result, setResult] = React.useState(null)
  let [input, setInput] = React.useState(null)

  useEffect(() => {
    onChangeResult(result)
  }, [result])

  const compare = ( a, b ) => {
    if ( a[sortedBy] < b[sortedBy] ){
      return -1;
    }
    if ( a[sortedBy] > b[sortedBy] ){
      return 1;
    }
    return 0;
  }

  const onChangeInput = (input) => {
    setInput(input)
    let coursesList = data.filter((element) => (element.courseName.toLowerCase().includes(input)))
    coursesList = coursesList.sort(compare)
    setResult(coursesList)
  }

  return (
    <>
      <div>
        <label htmlFor="title">Sorted by price </label>
        <input
          placeholder={placeholder}
          type="text"
          value={input}
          onChange={(e) => {
            onChangeInput(e.target.value)
          }}
        />
      </div>
    </>
  )
}

export default SearchBox