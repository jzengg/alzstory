
$( document ).ready(function() {

    $(".archiveDropdown").click(function() {
		$(".archiveVideos").removeClass("hidden");
    });
});

/*
data = {
	"currentProfile" : "",
	"profiles" :
	[
		{
			"name" : "Mike",
			"age" : "57",
			"diseaseStage" : "Early Onstage",
			"location" : "Boston, MA",
			"caregiverPatient" : "Patient",
			"username" : "mikeisgreat",
			"diagnosisYear" : "2013",
			"videoURL" : "",
			"photoURL" : "./images/avatar.png",
			"archiveVideos" : [],
			"contact" :
			[
				{
					"email" : "mike@alz.org",
					"public" : true
				},
				{
					"skype" : "mikeIsGreat",
					"public" : true
				},
				{
					"hangout" : "mike",
					"public" : true
				},
				{
					"phone" : "609-502-2132",
					"public" : false
				}
			],
			"hobbies" : ["basketball", "technology", "videogames"],
			"friends" : ["Steve", "Sheryl", "Judy"],
		},
	]
};

var profileController = {
  getProfile: function () {
    var profileId = data.currentProfile;
    return data.profile[profileId];
  }
};

var viewProfile = {
	init: function() {
		// Grab all the dom elements
		this.profileImage = $(".profile_image");
		this.profileVideo = $(".profile_video");
		this.bio = $(".bio");
		this.hobbies = $(".hobbies");
		this.friends = $(".freinds");
	},
	render: function() {
		
	}
};
*/
