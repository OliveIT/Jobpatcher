import React, {Component} from "react";
import { Button, Modal } from "antd";

import MembershipCard from "./MembershipCard";

const OtherCardPadding = 45;
const CardMargin = 8;

class MembershipContentMobile extends Component {    
    
    _scroller = React.createRef();

  constructor(props, context) {
    super(props, context);    
    
    this.state = {
        type: 1,
        current: 1
    };

    this.updateStatWithProps = this.updateStatWithProps.bind(this);
    this.moveCard = this.moveCard.bind(this);
    this.calcCardWidth = this.calcCardWidth.bind(this);
    this.onChangeCard = this.onChangeCard.bind(this);
    this.animationCard = this.animationCard.bind(this);
  }

  updateStatWithProps (props) {
        this.setState({type: props.type})
  }

  componentWillMount() {
        this.updateStatWithProps(this.props);
  }

  componentDidMount() {
        this.moveCard( this.state.current );
  }

  componentWillReceiveProps(nextProps) {
        this.updateStatWithProps(nextProps);
  }

  componentDidUpdate(){
    this.moveCard( this.state.current );
  }

  calcCardWidth () {    
    const { width } = this.props;
    var cardWidth = 0;
    if( this._scroller ) {
        cardWidth = width - (OtherCardPadding + CardMargin) * 2;
    }
    return cardWidth;
  }

  animationCard( idx, targetPos ) {
    var currPos = parseInt(this._scroller.current.style.left);
    const nStep = 20;
    if( Math.abs( currPos - targetPos ) < nStep ) {
        this._scroller.current.style.left = targetPos + "px";        
        this.setState( {
            current: idx
        })
    } else {
        if( currPos > targetPos )
            currPos -= nStep;
        else
            currPos += nStep;
        this._scroller.current.style.left = currPos + "px";

        setTimeout(() => { this.animationCard(idx, targetPos) }, 50);
    }    
  }

  moveCard ( idx ) {
    var cardWidth = this.calcCardWidth();
    if( this._scroller ) {    
        var targetLeft = (-1 * idx * cardWidth);
        // this.animationCard( idx, targetLeft );
        this._scroller.current.style.left = targetLeft + "px";
    }
  }

  onChangeCard (idx) {
    console.log( idx );
    this.moveCard( idx );

    this.setState( {
        current: idx
    })
  }
  
  render() {    
    const { onChangeType } = this.props;
    const { type, current } = this.state;

    return (
        <div className="gx-relation-container">        
            <div className="gx-membership-scroll" ref={this._scroller}>        
                <div className="gx-membership-mobile-container">
                    <MembershipCard index={0} current={current} type={type} onChangeType={onChangeType} onChangeCard={this.onChangeCard} />
                    <MembershipCard index={1} current={current} type={type} onChangeType={onChangeType} onChangeCard={this.onChangeCard} />
                    <MembershipCard index={2} current={current} type={type} onChangeType={onChangeType} onChangeCard={this.onChangeCard} />
                    <MembershipCard index={3} current={current} type={type} onChangeType={onChangeType} onChangeCard={this.onChangeCard} />
                </div>
            </div>
        </div>
    );
  }
};

export default MembershipContentMobile;
