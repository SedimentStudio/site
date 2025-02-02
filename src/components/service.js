import PropTypes from "prop-types"
import React from "react"

const Service = ({ title, list, description }) => {
  return (
    <div className="py-6">
      <h3 className="text-2xl mb-4">{title}</h3>
      <div className="grid gap-4 lg:grid-rows-1 lg:grid-cols-3">
        <div className="row-auto lg:col-span-1">
          <ul className="list-disc list-inside">
            {list.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        <div className="row-auto lg:col-span-2">
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
