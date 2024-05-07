// @Schema({
//   collection: "SAMPLE",
//   timestamps: true,
// })
export class Sample {
  name: string;
  desc: string;
}

export type SampleDocument = Sample;
