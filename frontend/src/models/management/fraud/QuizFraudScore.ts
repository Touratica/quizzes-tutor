export default class QuizFraudScore {
  username!: string;
  score!: number;
  

  constructor(jsonObj?: QuizFraudScore) {
    if (jsonObj) {
      this.username = jsonObj.username;
      if (jsonObj.score) this.score = jsonObj.score;

    }
  }
}
