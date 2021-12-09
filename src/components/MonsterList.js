import React from "react";
import { connect } from "react-redux";


const MonsterList = (props) => {

    return(
        <>
            <h1>Monster List</h1>
            <div>
                { props.isFetching ? 
                    <h3>Loading monsters</h3> 
                    : 
                    props.monsters.map(monster => (<h3 key={monster.id}>{monster.name}</h3>))
                }
            </div>
        </>
    )
}
const mapStateToProps = state =>{
    return ({
        monsters: state.monsters,
        isFetching: state.isFetching
    })
}
export default connect(mapStateToProps, {})(MonsterList)