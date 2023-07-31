##Note - As application is in DEMO MODE of Unspalsh API therefore I have restriction of 50 API CALLS per Hour,which can restrict you from experiencing smooth app performance. 

#Social Seedlings
#	A web app having functionality similar to Instagram's news feed and profile
section created by Chirag jain and documented on 30th july 2023.

#Table of Content:
 
 ▪️ Introduction
 
 ▪️ Key Features
 
 ▪️ Sections
 
 ▪️ Feed Section
 
 ▪️ Profile Section
 
 ▪️ API Used
 
#Introduction
	
Welcome to "Social Seedlings," our web application designed to bring you a seamless experience of discovering captivating posts and  
connecting with like-minded individuals.
 With our user-friendly interface, you can immerse yourself in a never-ending stream of captivating posts shared by users from all around the 
 world. Dive into the lives of your friends and other users through our engaging profile sections. Each user has a unique space to showcase their 
 personality, share their achievements, and express themselves creatively.
	
 #Key Features
	
 ▪️ Infinity Scroll Posts: Seamlessly endless content browsing; as you scroll down the feed, new posts load automatically, ensuring a fluid and 
   immersive user experience.
 
 ▪️ Explore user profiles: Discover individuals' unique identities, posts, and interests. Engage through likes, fostering meaningful 
  connections.

▪️ Like users' post: Express appreciation and engagement by liking others' content, fostering a sense of community and encouragement within the 
 platform

▪️ Responsive UI: Seamlessly adapts to various devices, ensuring optimal user experience on smartphones, tablets, and desktops
	
▪️ Toggle between grid and list views : providing a dynamic experience to browse posts in a visually appealing and organized manner.
	
#Sections

	Feed Section 
   
	1.Dynamic Content: The feed section presents a dynamic content stream, fetching 10 posts at a time, ensuring a smooth user experience.
	
    2.Infinite Scrolling: As users scroll down, the feed automatically loads more posts, eliminating the need for manual pagination.
		
    3.Multiple Users: The feed aggregates posts from multiple users, offering a diverse and engaging array of content.
		
    4.Post Preview: Posts are displayed with concise previews, allowing users to quickly assess the content's relevance.
		
    5.Like Functionality: Users can express appreciation for posts by liking them, fostering interaction and engagement within the community.
		
    6.User Profile Preview: A snippet of the user's profile, including their profile picture and username, is visible alongside their posts.
	
 Profile Section
		
    1. Personalized Overview: Users access their profile, showcasing their posts, interactions, and profile details.
		
    2. Post Showcase: View all posts in a convenient grid or list format, enhancing browsing options.
		
    3. Infinite Scrolling: Seamlessly explore extensive post collections with endless scrolling functionality.
		
    4. User-Driven Choice: Flexibly switch between grid and list views based on personal preference.
		
    5. Profile Details: Display user's bio, profile picture, and links to social media handles.
		
    6. Activity Summary: Track follower count, following list, and engagement statistics.
		
#API USED:
	
 Using unsplash API for fetching high-quality images and other relevant information.
	
 1. Fetching User Posts: 
		Utilizing the Unsplash API's "List photos" endpoint to retrieve a collection of posts.
		By passing the owner's unique clientId as a parameter to the API call.
		The API response will contain data about the user & user's posts, including image URLs, captions, likes, and other relevant information.

2. Fetching User Details:
		Using the Unsplash API's "Get a user's public profile" endpoint to obtain comprehensive information about a specific user.
		Pass the user's username or user ID as a parameter to the API call.
		The API response will contain user-specific data such as name, bio, profile image URL, total likes, and the number of followers and 
    following.
    
3.Fetching Your Details:
		Utilizing the Unsplash API's"Get the user’s profile" endpoint to retrieve your(user) details.
		Pass your unique clientID and bearer token to API call. 
		The API response will contain your data such as name, bio, profile image URL, total likes, and the number of followers and following.
