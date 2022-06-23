<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Diary;

class DiaryController extends Controller
{
    public function index(Diary $diary)
    {
        return view('index')->with(['diaries' => $diary->get()]);
    }
    
    public function show(Diary $diary)
    {
        return view('show')->with(['diary' => $diary]);
    }
    
    public function create()
    {
        return view('create');
    }
    
    public function store(Request $request, Diary $diary)
    {
        $input = $request['diary'];
        $input += ['user_id' => $request->user()->id];
        $diary->fill($input)->save();
        return redirect('/diary/' . $diary->id);
    }
}
