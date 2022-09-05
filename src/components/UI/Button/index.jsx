import React from 'react'

const index = ({className, title, Tag = 'button', onAction = () => {}}) => {
  return (
    <div>
        <Tag onClick={onAction} className={` w-full p-[0_37px] leading-[54px]  ${className} `}>
            {title}
        </Tag>
    </div>
  )
}

export default index