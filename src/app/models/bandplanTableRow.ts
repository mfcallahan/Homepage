export class BandplanTableRow {
  channel: string;
  name: string;
  frequency: string;
  tone: string;
  bandwidth: string;
  power: string;
  notes: string;

  constructor(
    channel: string,
    name: string,
    frequency: string,
    tone: string,
    bandwidth: string,
    power: string,
    notes: string
  ) {
    this.channel = channel;
    this.name = name;
    this.frequency = frequency;
    this.tone = channel;
    this.bandwidth = bandwidth;
    this.power = power;
    this.notes = notes;
  }
}
