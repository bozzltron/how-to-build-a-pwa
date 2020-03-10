install:
	npm install

step1: install
	npx http-server "Step 1 - HTML Basics"

step2: install
	npx http-server "Step 2 - Web Manifest"

step3: install
	npx http-server "Step 3 - Service Worker"

step4: 
	cp package.json "Step 4 - App Shell"/package.json && cd "Step 4 - App Shell" && PORT=8080 NODE_PATH=".." ../node_modules/.bin/react-scripts build && cp src/service-worker.js build/service-worker.js
	npx http-server "Step 4 - App Shell"/build

step5: 
	#cd "Step 5 - iOS Accomodations" && npm install && npm start
	cp package.json "Step 5 - iOS Accomodations"/package.json && cd "Step 5 - iOS Accomodations" && PORT=8080 NODE_PATH=".." ../node_modules/.bin/react-scripts start

step6: 
	#cd "Step 6 - Handle Push Notifications" && npm install && npm start
	cp package.json "Step 6 - Handle Push Notifications"/package.json && cd "Step 6 - Handle Push Notifications" && PORT=8080 NODE_PATH=".." ../node_modules/.bin/react-scripts start

generateKeys: 
	./node_modules/.bin/web-push generate-vapid-keys

sendPushNotification: 
	node "Step 7 - Send Push Notifications"/send-push-notification.js

step7: 
	cp package.json "Step 7 - Send Push Notifications"/package.json && cd "Step 7 - Send Push Notifications" && PORT=8080 NODE_PATH=".." ../node_modules/.bin/react-scripts start

step8: 
	node "Step 8 - Branding"/server.js

	