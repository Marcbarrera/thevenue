import React, { Component } from 'react'

 class TimeCountDown extends Component {

    state = {

    }
    render() {
        return (
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Event starts in
                </div>
                <div className="countdown_bottom">
                    <div className="countdown_item">
                        <div className="countdown_time">
                            23
                        </div>
                        <div className="countdown_tag">
                            Days
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            2
                        </div>
                        <div className="countdown_tag">
                            Hs
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            23
                        </div>
                        <div className="countdown_tag">
                            Min
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            23
                        </div>
                        <div className="countdown_tag">
                            Sec
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default TimeCountDown