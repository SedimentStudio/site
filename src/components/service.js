import PropTypes from "prop-types"
import React from "react"

const Service = ({ title, list, description }) => {
  return (
    <div className="py-6">
      <h3 className="text-2xl mb-4">{title}</h3>
      <div className="grid sm:grid-rows-1 sm:grid-cols-3 gap-4">
        <div className="row-auto sm:col-span-1">
          <ul className="list-disc list-inside">
            {list.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        <div className="row-auto sm:col-span-2">
          {description}
        </div>
      </div>
    </div>
  )
}

Service.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
  description: PropTypes.string,
}

Service.defaultProps = {
  title: ``,
  list: [],
  description: ``,
}

export default Service
