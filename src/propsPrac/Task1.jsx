//simple profile card system=>consist username,age,personalized geeting msg,=>by using props 
export const Task1=()=>{
    return(
        <div>
            <h1>Profile card system</h1>
            <ProfileCard name="alice"
              age={30}
             greeting={
                <div>
                    <strong>Hii alice nice to meet you</strong>
                </div>

            }
            >
                <p>Hobbies:reading,painting</p>
                <button>contact</button>
            </ProfileCard>
            <ProfileCard name="BOb"
              age={30}
             greeting={
                <div>
                    <strong>Hii Bob nice to meet you</strong>
                </div>

            }
            >
                <p>Hobbies:reading,painting</p>
                <button>contact</button>
            </ProfileCard>
        </div>

    );
}

const ProfileCard=(props)=>{
   const{name,age,greeting,children}=props;
   return(
<>
<h2>Name:{name}</h2>
<h3>Age:{age}</h3>
<p>{greeting}</p>
<div>{children}</div>
</>
    );
}