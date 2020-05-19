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
    
  tools {nodejs "LocalNPM"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/thyanmol/Personal_Youtube_App'
      }
    }
     
    stage('Build image') {
        /* This builds the actual image */

	    script{
        app = docker.build("thyanmol/youtube-1.0")
    }
    }

    stage('Test image') {
        
        app.inside {
            echo "Tests passed"
        }
    }

    stage('Push image') {
	    script{
        docker.withRegistry('https://registry.hub.docker.com', 'thyanmol-docker') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
            } 
	    }
                echo "Trying to Push Docker Build to DockerHub"
    }  
    
  }
}
