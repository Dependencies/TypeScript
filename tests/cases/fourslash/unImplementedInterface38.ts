/// <reference path='fourslash.ts' />

////    abstract class C2 {
////        abstract f1<T extends number>();
////    }
////
////    var x: C2 = {/*0*//*1*/}

verify.codeFixAtPosition({ span: { start: 0, end: 0 }, newText: "f1<T extends number>(){sys.newLine throw new Error('Method not Implemented');sys.newLine} sys.newLine" });
