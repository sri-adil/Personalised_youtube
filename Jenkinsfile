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
		    }
		 }
	    }

	stage('Test') {
            steps {
		 script{
                	sh './test.sh'
		 }
            }
        }
		
	    stage('Push image') {
		 steps{
		    script{
			docker.withRegistry('https://registry.hub.docker.com', 'sri-docker') {
				app.push("${env.BUILD_NUMBER}")
				app.push("latest")
			}
		 }
		echo "Trying to Push Docker Build to DockerHub"
	       }  
           }

	stage('Deploying image with rundeck') {
		steps{
             		build job: 'personalised_youtube(rundeck)'
		}
	}
  }
}
