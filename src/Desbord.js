import React,{ Component } from 'react'
import Satting from './Satting'
import Display from './Display'
import {storage} from './firebaseconfig'


class Desbord extends Component{
    state={
        thirtColor:'black',
        upperText:'this is upper text', 
        lowerText:'this is lower text',
        memeImg:'',
        url:'',
        textSize:12,
        textColor:'white'
        

        
    }
    handleTshirtColor=(e)=>{
        this.setState({thirtColor:e.target.id})
    }
    handelUppertext=(e)=>{
        this.setState({upperText:e.target.value})
    }
    handelLowertext=(e)=>{
        this.setState({lowerText:e.target.value})
    }
    handleImageUplood=(e)=>{
       if(e.target.files[0]){
           const image = (e.target.files[0])
           const upploadTask = storage.ref(`images/${image.name}`).put(image)
           upploadTask.on('state.changed',
           (snapshot)=>{
                console.log(snapshot)
           },
           (error)=>{
            console.log(error)
           },
           ()=>{
               storage.ref('images').child(image.name).getDownloadURL().then(url=>{
                   console.log(url)

               })
           }
           
           )
       }
    }
    
    handletextSize=(e)=>{
        this.setState({textSize:e.target.value})
    }
    textFormate=()=>{
        const size = this.state.textSize
        return parseInt(size)
    }
    handeTextColor=(e)=>{
        this.setState({textColor:e.target.value})
    }
    

    
render(){
        return (
            <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-4'>
                    <Satting 
                     color={this.handleTshirtColor}
                     upperText={this.handelUppertext}
                     color={this.handleTshirtColor}
                     lowerText={this. handelLowertext}
                     uploadImage={this.handleImageUplood}
                     textSize={this.handletextSize}
                     textColor={this.handeTextColor}

                     
                     
                    />
                </div>
                <div className='col-lg-8'>
                    <Display 
                    display={this.state}
                    formateText={this.textFormate()}
                    />
                    
                </div>
            </div>
        </div>
        )
    }
}

export  default Desbord