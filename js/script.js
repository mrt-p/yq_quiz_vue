var quiz = {
  questions: [
  
  {
    text: "Which is the fastest one? ",
    responses: [
    { text: "Vue.js" },
    { text: "React", correct: true },
    { text: "Inferno.js" },
    { text: "Backbone.js" }] },


  {
    text:
    "Is React a framework?",
    responses: [
    { text: "True" },

    { text: "False", correct: true },] },


  {
    text: "Given the series 0, 1, 1, 2, 3, 5... which is the next number?",
    responses: [
    { text: "6" },
    { text: "7" },
    { text: "8", correct: true},
    { text: "9" },
    { text: "10" } ] }] },




userResponseSkelaton = Array(quiz.questions.length).fill(null);

var app = new Vue({
  el: "#app",
  data: {
    quiz: quiz,
    questionIndex: 0,
    userResponses: userResponseSkelaton,
    isActive: false },

  filters: {
    charIndex: function (i) {
      return String.fromCharCode(97 + i);
    } },

  methods: {
    restart: function () {
      this.questionIndex = 0;
      this.userResponses = Array(this.quiz.questions.length).fill(null);
    },
    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      //console.log(this.userResponses);
    },
    next: function () {
      if (this.questionIndex < this.quiz.questions.length)
      this.questionIndex++;
    },

    prev: function () {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    
    score: function () {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
        typeof this.quiz.questions[i].responses[
        this.userResponses[i]] !==
        "undefined" &&
        this.quiz.questions[i].responses[this.userResponses[i]].correct)
        {
          score = score + 1;
        }
      }
      return score;

    } } });
