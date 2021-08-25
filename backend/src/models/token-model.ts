import { Schema, model, Model, Document } from "mongoose";

interface IToken {
  user: Schema.Types.ObjectId;
  refreshToken: string;
}

const TokenSchema = new Schema<IToken, Model<IToken>, IToken>({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  refreshToken: { type: String, required: true },
});

const Token = model<IToken & Document>("Token", TokenSchema);

export default Token;
