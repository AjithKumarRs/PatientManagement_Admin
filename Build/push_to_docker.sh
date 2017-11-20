#!/bin/bash
set -ev

echo "TRAVIS_EVENT_TYPE is $TRAVIS_EVENT_TYPE"
echo "TRAVIS_BRANCH is $TRAVIS_BRANCH"
echo "TRAVIS_BUILD_NUMBER is $TRAVIS_BUILD_NUMBER"

DO_PUSH=1

if [ "$TRAVIS_BRANCH" == "develop" ]; then
  DO_PUSH=0
fi
if [ "$TRAVIS_BRANCH" == "master" ]; then
  DO_PUSH=0
fi

if [ "$DO_PUSH" == "0" ]; then
	docker login -u $TD_DOCKER_USERNAME -p $TD_DOCKER_PASSWORD
	docker tag clario_admin s2kdesign/clario_admin:1.2.$TRAVIS_BUILD_NUMBER-$TRAVIS_BRANCH
	docker push s2kdesign/clario_admin:1.2.$TRAVIS_BUILD_NUMBER-$TRAVIS_BRANCH
fi
