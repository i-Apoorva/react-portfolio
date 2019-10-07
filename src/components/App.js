import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profile.jpg';
import Title from './Title';
import Header from './Header';

class App extends Component {
    state = {
        displayBio: false
       };

    toggleDisplayBio =() => {
        this.setState({displayBio : !this.state.displayBio});
    }

    render() {

        return(
            <div>
                <img src={profile} alt='profile' className='profile'/>
                <h1>Hello</h1>
                <p>My name is Apoorva.</p>
                <Title/>
                <p>I am always looking forward to work on meaningful projects.</p>
                
                {
                 this.state.displayBio? (<div>
                    <p>here is more information about me....</p>
                    <p>I live in Noida. I am looking for a new job.</p> 
                    <p>Yesterday it was a beautiful cloudy day. I was in love with it.</p>
                    <button onClick={this.toggleDisplayBio}>Show less</button>
                 </div>) : (<div> 
                 <button onClick={this.toggleDisplayBio}>Read More</button>
                 </div>
                 )
                }
                <hr/>
                <Projects/>
                <hr/>
                <SocialProfiles/>

            </div>
        )

        
    }
}
export default App;