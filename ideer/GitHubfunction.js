import {githubHeaderFromLStorage,
        githubReposFromLStorage,
        myUrl,
        headerArray} from './constExports/globalConstants';

// const avatarElm = document.getElementById("avatar-elm")

let myGithubHeader = {}
let myGithubRepositories = {}

// If wanted data isn't found in local storage, go get it at gitHub
if (!githubHeaderFromLStorage) {  
    fetchGithubData(myUrl, "myGitHubHeader");
    fetchGithubData(`${myUrl}/repos`, "myGithubRepositories");
}

// It is still possible that no data is present and this routine is supposed to run 
// only if something relevant is found in local storage
export const gitHubHeader = {
    if (myGithubHeader = githubHeaderFromLStorage) {
        //myGithubHeader = githubHeaderFromLStorage
      
        Object.entries(myGithubHeader).forEach(function([key, value]) {
            var elementText = `${key}: ${value}`
            
            if (headerArray.includes(key)) {
                    if (key === 'TBDavatar_url') {
                     //avatarElm.setAttribute("src", value) 
                    }
                    else {
                    PopulateTheStuffSomeWhere(elementText)
                    }
                }
        })
        return myGithubHeader
    }
}

export const gitHubRepositories = {
// ..and then we have to do something with the details
    if (myGithubRepositories = githubReposFromLStorage) { 
        // action pretty much to be decided
        console.log('Amount of repository object keys: ', Object.keys(myGithubRepositories).length)
        return myGithubRepositories
    }  
}

function PopulateTheStuffSomeWhere(stuff) {
    console.log(stuff)
}

async function fetchGithubData(urLocator, storageLocator) {
    // read github data
    let githubResponse = await fetch(urLocator);
    let githubData = await githubResponse.json();
  
    localStorage.setItem(storageLocator, JSON.stringify(githubData))
    // wait 2 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  }
  
  // gitHubHeader, gitHubRepositories