pipeline {
  agent any

  environment {
    BACKEND_IMAGE = 'aryasingh55/sparklehood-backend'
  }

  stages {
    stage('Clone from GitHub') {
      steps {
        git branch: 'main', url: 'https://github.com/Aryagithubk/Sparklehood_assignment.git'
      }
    }

    stage('Build Backend Image') {
      steps {
        sh 'docker build -t $BACKEND_IMAGE .'
      }
    }

    stage('DockerHub Login') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKERHUB_USER', passwordVariable: 'DOCKERHUB_PASS')]) {
          sh 'echo "$DOCKERHUB_PASS" | docker login -u "$DOCKERHUB_USER" --password-stdin'
        }
      }
    }

    stage('Push Backend Image') {
      steps {
        sh 'docker push $BACKEND_IMAGE'
      }
    }

    stage('Deploy Backend Container') {
      steps {
        sh 'docker compose up --build -d'
      }
    }
  }

  post {
    success {
      echo '✅ Backend deployed successfully!'
    }
    failure {
      echo '❌ Deployment failed!'
    }
  }
}
