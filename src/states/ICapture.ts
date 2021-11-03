import { ICaptureSource } from '../domain/Capture';

export default interface ICapture {
  sources: ICaptureSource[];
  selected?: MediaStream | null;
}
