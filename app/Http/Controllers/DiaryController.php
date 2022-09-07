<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\DiaryRequest;
use App\Models\Diary;
use App\Events\DiaryWrited;
use Inertia\Inertia;

class DiaryController extends Controller
{
    public function top(Diary $diary)
    {
        return Inertia::render('top', [
            'diaries' => $diary->getByDate()
        ]);
    }

    public function index(Diary $diary)
    {
        return view('index')->with(['diaries' => $diary->getByDate()]);
    }

    // Vue.jsを使おうとした残骸
    // public function index(Diary $diary)
    // {
    //     return Inertia::render('Index',['diaries' => $diary->get()]);
    // }

    public function show(Diary $diary)
    {
        return view('show')->with(['diary' => $diary]);
    }

    public function create()
    {
        return Inertia::render('Create');
    }

    public function store(DiaryRequest $request, Diary $diary)
    {
        $input = $request['diary'];
        $input += ['user_id' => $request->user()->id];
        $diary->fill($input)->save();
        event(new DiaryWrited());
        return redirect('/diary/' . $diary->id);
    }

    public function random()
    {
        $diaries = Diary::all()->pluck('id')->toArray();
        return redirect("/diary/".$diaries[(array_rand($diaries))]);
    }
}
