/**
 * Created by Naseat_PC on 11/26/2016.
 */
import React from 'react';
import {NavItem,Nav,Button} from 'react-bootstrap';

const styles={
    style:{
        color:'rgba(0, 0, 0, 0.870588)',
        backgroundColor: 'rgb(255, 255, 255)',
        transition: 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
        boxSizing: 'border-box',
        boxShadow:'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px',
        borderRadius:'0px',
        height: '100%',
        width: 256,
        position: 'fixed',
        zIndex: '1300',
        left: '0px',
        top: '0px',
        transform: 'translate(0px, 0px)',
        overflow: 'auto'
    }
}

export default class SidBarMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showMenuBar: false}
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showMenuBar: !prevState.showMenuBar
        }));
    }

    render() {
        function MenuLeftBar(props) {
            if (!props.warn) {
                return null;
            }

            return (
                <div>
                    <Nav style={styles.style}>
                        <NavItem eventKey={1} href="#">NavItem 1 content</NavItem>
                        <NavItem eventKey={2} title="#">NavItem 2 content</NavItem>
                        <NavItem eventKey={3} href="#">NavItem 3 content</NavItem>
                        <NavItem eventKey={4} title="#">NavItem 4 content</NavItem>
                    </Nav>
                </div>
            );
        }

        return (
            <div>
                <MenuLeftBar warn={this.state.showMenuBar}/>
                <Nav onMouseOver={this.handleToggleClick}>
                    {this.state.showMenuBar ? 'Hide' : 'Show'}
                </Nav>

            </div>
        );
    }
}