/*pipeline {
  agent any
    
  tools {nodejs "localnode"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/sri-adil/Personalised_youtube'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
	sh 'npm run build'
      }
    }  
    
  }
}*/
pipeline {
	environment {
    app = ''
  }
  agent any
    
  tools {nodejs "localnode"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/sri-adil/Personalised_youtube'
      }
    }
     
    stage('Build image') {
	    steps{
	    script{
        app = docker.build("81196/youtube_api")
	    }}
    }

    /*stage('Test image') {
        
        app.inside {
            echo "Tests passed"
        }
    }*/

    stage('Push image') {
	    steps{
	    script{
        docker.withRegistry('https://registry.hub.docker.com', 'sri-docker') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
            } 
	    }
                echo "Trying to Push Docker Build to DockerHub"
	    }  }
    
  }
}
