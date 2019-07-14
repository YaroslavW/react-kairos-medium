import React from "react";
import Modal from "react-responsive-modal";

export default class Modals extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      open: false
    };
  }
  

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
    
    const { open } = this.state;
     if (this.props.data) {
       var modal = this.props.data.map((val, index) => (
         <div key={index}>
           <div onClick={this.onOpenModal}>
             <div className="col portfolio-item">
               <div className="item-wrap">
                 {/* eslint-disable-next-line */}

                 <img src={val.img} alt={val.alt} />

                 <div className="portfolio-item-meta">
                   <h5>
                     {/* eslint-disable-next-line */}
                     <a href="#">{val.title}</a>
                   </h5>
                 </div>
               </div>
             </div>
           </div>

           <Modal open={open} onClose={this.onCloseModal} center>
             <div className="reveal-modal">
               <img
                 className="scale-with-grid"
                 src={val.img_modal}
                 alt={val.alt_modal}
               />

               <div className="description-box">
                 <h4>{val.title_modal}</h4>
                 <p>{val.text}</p>
                 <span className="categories">
                   <i className="icon-tag" />
                   {val.category_modal}
                 </span>
               </div>

               <div className="link-box">
                 <a href={val.link_modal}>Details</a>
                 {/* eslint-disable-next-line */}
                 <a href="#"
                   className="close-reveal-modal"
                   onClick={this.onCloseModal}
                 >
                   Close
                 </a>
               </div>
             </div>
           </Modal>
         </div>
       ));
     }

    return (
     <p>{modal}</p>
    );
  }
}
