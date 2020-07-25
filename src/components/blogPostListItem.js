import React from "react"
import { Link } from "gatsby"

const BlogPostListItem = ({ title, date, excerpt, slug }) => {
  return (
    <div class="py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap">
      <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span class="mt-1 text-gray-500 text-sm">{date}</span>
      </div>
      <div class="md:flex-grow">
        <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{title}</h2>
        <p class="leading-relaxed">{excerpt}</p>
        <Link to={`/blog/${slug}/`} className="text-brown-400 inline-flex items-center mt-4">Read
          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default BlogPostListItem