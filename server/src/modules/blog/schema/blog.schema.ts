import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type BlogDocument = HydratedDocument<Blog>

@Schema({
  versionKey: false,
})

export class Blog {
  @Prop()
  blog_id: string

  @Prop()
  blog_type: string

  @Prop()
  blog_title: string

  @Prop()
  blog_file: Buffer
}

export const BlogSchema = SchemaFactory.createForClass(Blog)