/// <reference path='fourslash.ts' />

////    abstract class C1 {
////        abstract f1<T extends number>();
////    }
////
////    interface I1 extends C1 {}
////
////    class C2 implements I1 {/*0*//*1*/
////
////    }

verify.codeFixAtPosition({ span: { start: 0, end: 0 }, newText: "f1<T extends number>(){sys.newLine throw new Error('Method not Implemented');sys.newLine}sys.newLine" });
