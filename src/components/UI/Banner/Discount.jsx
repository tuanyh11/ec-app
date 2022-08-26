import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'


const Discount = ({data}) => {
  return (
    <div>
        <div style={{backgroundImage: `url(${data.img})`}}>
            <div>
                <h1>{data.title}</h1>
                <div>
                    <div>
                        <p></p>
                        <span></span>
                    </div>
                    <div>
                        <p></p>
                        <span></span>
                    </div>
                    <div>
                        <p></p>
                        <span></span>
                    </div>
                    <div>
                        <p></p>
                        <span></span>
                    </div>
                </div>
                <div>
                    <button>Shop Now </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Discount